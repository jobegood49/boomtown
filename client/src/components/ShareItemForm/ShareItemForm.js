import React, { Component, Fragment } from 'react'
import { FormSpy, Form, Field } from 'react-final-form'
import ItemsContainer from '../../containers/ItemsContainer'

import {
  Button,
  TextField,
  Checkbox,
  InputLabel,
  Select,
  MenuItem,
  ListItemText,
  Input
} from '@material-ui/core'
import { connect } from 'react-redux'

import {
  resetImage,
  updateNewItem,
  resetNewItem
} from '../../redux/modules/ShareItemPreview'

class ShareItemForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fileSelected: false,
      selectedTags: [],
      submitted: false
    }
    this.fileRef = React.createRef()
  }
  handleCheckbox(event) {
    this.setState({
      selectedTags: event.target.value
    })
  }
  generateTagsText(tags, selected) {
    return tags
      .map(t => (selected.indexOf(t.id) > -1 ? t.title : false))
      .filter(e => e)
      .join(', ')
  }

  applyTags(tags) {
    return (
      tags &&
      tags
        .filter(t => this.state.selectedTags.indexOf(t.id) > -1)
        .map(t => ({ title: t.title, id: t.id }))
    )
  }

  async saveItem(values, tags, addItem) {
    const {
      validity,
      files: [file]
    } = this.fileRef.current
    if (!validity.valid || !file) return

    try {
      const itemData = {
        ...values,
        tags: this.applyTags(tags)
      }
      await addItem.mutation({
        variables: {
          item: itemData,
          image: file
        }
      })
      this.setState({ done: true })
    } catch (e) {
    }
  }
  onSubmit = values => {
    console.log(values)
  }
  validate = values => {
    console.log(values)
  }
  getBase64Url() {
    return new Promise(resolve => {
      const reader = new FileReader()
      reader.onload = e => {
        resolve(
          `data:${this.state.fileSelected.mimeType};base64, ${btoa(
            e.target.result
          )}`
        )
      }
      reader.readAsBinaryString(this.state.fileSelected)
    })
  }
  handleImageSelect = event => {
    console.log('yo', event.target.files[0])
    this.setState({ fileSelected: event.target.files[0] })
    console.log(this.state.fileSelected)
  }
  getTags = tags => {
    if (tags) {
      return tags.map(tag => JSON.parse(tag))
    }
    return []
  }

  dispatchUpdate(values, tags, updateNewItem) {
    if (!values.imageurl && this.state.fileSelected) {
      this.getBase64Url().then(imageurl => {
        updateNewItem({
          imageurl
        })
      })
    }
    updateNewItem({
      ...values,
      tags: this.applyTags(tags)
    })
  }

  render() {
    const { resetImage, updateNewItem, resetNewItem } = this.props

    return (
      <ItemsContainer>
        {({ addItem, tagData: { loading, error, tags } }) => {
          if (loading) {
            return 'Content Loading...'
          }
          if (error) {
            return `error: ${error.message}`
          }
          return (
            <Form
              onSubmit={values => {
                console.log('values', values)
                console.log('tags', tags)
                console.log('add item', addItem)
                this.saveItem(values, tags, addItem)
              }}
              validate={this.validate}
              render={({ handleSubmit, pristine, invalid, values }) => (
                <form onSubmit={handleSubmit}>
                  <FormSpy
                    subscription={{ values: true }}
                    component={({ values }) => {
                      if (values) {
                        this.dispatchUpdate(values, tags, updateNewItem)
                      }
                      return ''
                    }}
                  />
                  <Field name="imageurl">
                    {(input, meta) => (
                      <Fragment>
                        <Button
                          style={{ width: '100%' }}
                          variant="contained"
                          color="primary"
                          onClick={() => {
                            this.fileRef.current.click()
                            // TODO: if i click this and there is an image
                            // selected already, clear the image from the state
                            // and start over.
                          }}
                        >
                          Select an Image!
                        </Button>
                        <input
                          onChange={e => this.handleImageSelect(e)}
                          type="file"
                          accept="image/*"
                          hidden
                          ref={this.fileRef}
                        />
                      </Fragment>
                    )}
                  </Field>
                  {/* <Field
                  render={({ input, meta }) => (
                    <Button variant="contained" color="primary">
                      Select an image
                    </Button>
                  )}
                /> */}
                  <div>
                    <Field name="title">
                      {({ input, meta }) => (
                        <TextField placeholder="Name your Item" {...input} />
                      )}
                    </Field>
                  </div>
                  <Field name="description">
                    {({ input, meta }) => (
                      <TextField
                        placeholder="Describe your Item"
                        multiline
                        {...input}
                      />
                    )}
                  </Field>
                  <div>
                    <label>
                      <b>Tags:</b>
                    </label>
                    <Select
                      multiple
                      style={{ width: '91%' }}
                      value={this.state.selectedTags}
                      onChange={event => this.handleCheckbox(event)}
                      input={<Input />}
                      renderValue={selected => {
                        return this.generateTagsText(tags, selected)
                      }}
                    >
                      {tags &&
                        tags.map(tag => (
                          <MenuItem key={tag.id} value={tag.id}>
                            <Checkbox
                              checked={
                                this.state.selectedTags.indexOf(tag.id) > -1
                              }
                            />
                            <ListItemText primary={tag.title} />
                          </MenuItem>
                        ))}
                      }
                    </Select>
                  </div>

                  <Button type="submit" variant="contained" color="primary">
                    Share
                  </Button>
                </form>
              )}
            />
          )
        }}
      </ItemsContainer>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  updateNewItem(item) {
    console.log(item)
    dispatch(updateNewItem(item))
  },
  resetNewItem() {
    dispatch(resetNewItem())
  },
  resetImage() {
    dispatch(resetImage())
  }
})

export default connect(
  undefined,
  mapDispatchToProps
)(ShareItemForm)
