import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { post } from 'axios'

import Preloader from '../../components/Preloader/Preloader'

import './FileUploader.scss'

export default class FileUploader extends Component {
    state = {
        loading: false,
    }
    onChange = (e) => {
        const file = e.target.files[0]

        this.onLoadCallback(e)

        this.fileUpload(file)
            .then((response) => {
                if (response.status === 200) {
                    if (response.data.error)
                        this.onErrorCallback(response.data)
                    else
                        this.onSuccessCallback(response)
                } else {
                    this.onErrorCallback(response)
                }
            })
            .catch(error => this.onErrorCallback(error))
    }

    onLoadCallback = (event) => {
        this.props.onLoad(event)
        this.setState({ loading: true })
    }

    onErrorCallback = (error) => {
        this.props.onError(error)
        this.setState({ loading: false })
    }

    onSuccessCallback = (data) => {
        this.props.onSuccess(data)
        this.setState({ loading: false })
    }

    fileUpload = (file) => {
        const formData = new FormData();
        formData.append(this.props.fileFieldName, file)
        const config = {
            headers: {
                'content-type': this.props.dataType,
            },
        }
        return post(this.props.url, formData, config)
    }

    triggerFileInput = (e, id) => {
        const inputFile = document.getElementById(id)
        console.log('click')
        inputFile.click()
    }

    render() {
        return (
            <label
                htmlFor={this.props.id}
                className="upload-file-form"
                onClick={e => this.triggerFileInput(e, this.props.id)}
            >
                {
                    (this.props.enablePreloader && this.state.loading) && (
                        <Preloader
                            size={this.props.preloaderSize}
                            color={this.props.preloaderColor}
                        />
                    ) || (
                        <div>
                            <input
                                id={this.props.id}
                                type="file"
                                onChange={this.onChange}
                                accept={this.props.accept}
                            />
                            {
                                this.props.customButton && (
                                    this.props.customButton()
                                ) || (
                                    <button
                                        type="button"
                                        className={this.props.btnClass}
                                    >
                                        {this.props.text}
                                    </button>
                                )
                            }
                        </div>
                    )
                }
            </label>
        )
    }
}

FileUploader.propTypes = {
    url: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    fileFieldName: PropTypes.string,
    dataType: PropTypes.string,
    text: PropTypes.string,
    btnClass: PropTypes.string,
    accept: PropTypes.string,
    customButton: PropTypes.func,
    onLoad: PropTypes.func,
    onError: PropTypes.func,
    onSuccess: PropTypes.func,
    enablePreloader: PropTypes.bool,
    preloaderColor: PropTypes.string,
    preloaderSize: PropTypes.string,
}

FileUploader.defaultProps = {
    fileFieldName: 'file',
    dataType: 'multipart/form-data',
    text: 'File Upload',
    btnClass: 'btn',
    customButton: null,
    accept: '',
    enablePreloader: false,
    preloaderColor: '#000',
    preloaderSize: 'sm',
    onLoad: () => { },
    onError: () => { },
    onSuccess: () => { },
}
