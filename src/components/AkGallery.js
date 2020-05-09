import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addToCart, getDummyData} from "./actions/cartActions";
import Lightbox from 'react-lightbox-component';
import ImageGallery from 'react-image-gallery';
import Item1 from '../images/item1.jpg'
import Item2 from '../images/item2.jpg'
import Item3 from '../images/item3.jpg'
import v4 from '../images/static/4v.jpg'
import image_set_default from '../images/static/image_set_default.jpg'
import image_set_thumb from '../images/static/image_set_thumb.jpg'
import image_set_cropped from '../images/static/image_set_cropped.jpg'
import v1 from '../images/static/1.jpg'
import v1t from '../images/static/2t.jpg'
// const PREFIX_URL = 'http://localost:3000/images/static/';
// const PREFIX_URL = 'http://localost:3000/images/static/';

class AkGallery extends Component{

    constructor() {
        super();
        this.state = {
            showIndex: false,
            showBullets: true,
            infinite: true,
            showThumbnails: true,
            showFullscreenButton: true,
            showGalleryFullscreenButton: true,
            showPlayButton: true,
            showGalleryPlayButton: true,
            showNav: true,
            isRTL: false,
            slideDuration: 450,
            slideInterval: 2000,
            slideOnThumbnailOver: false,
            thumbnailPosition: 'bottom',
            showVideo: {},
        };
    }

    lightBox = () => {
        return(
            <div>
                <Lightbox images={
                    [
                        {
                            src: Item1,
                            title: 'Gallery Img1',
                            description: 'Gallery Img1 description'
                        },
                        {
                            src: Item2,
                            title: 'Gallery Img1',
                            description: 'Gallery Img1 description'
                        },
                        {
                            src: Item3,
                            title: 'Gallery Img1',
                            description: 'Gallery Img1 description'
                        }
                    ]
                }/>
            </div>)
    }

    /*_getStaticImages() {
        let images = [];
        for (let i = 2; i < 12; i++) {
            images.push({
                original: `${PREFIX_URL}${i}.jpg`,
                thumbnail:`${PREFIX_URL}${i}t.jpg`
            });
        }

        return images;
    }*/

    imageGallery = () => {

        /*const images = [
            {
                original: Item1,
                thumbnail: Item1
            },
            {
                original: Item2,
                thumbnail: Item2
            },
            {
                original: Item3,
                thumbnail: Item3
            }
        ]*/
        const images = [
            /*{
                thumbnail: v4,
                original: v4,
                embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
                description: 'Render custom slides within the gallery'
                // renderItem: this._renderVideo.bind(this)
            },*/
            {
                original: image_set_default,
                thumbnail: image_set_thumb,
                imageSet: [
                    {
                        srcSet: image_set_cropped,
                        media : '(max-width: 1280px)',
                    },
                    {
                        srcSet: image_set_default,
                        media : '(min-width: 1280px)',
                    }
                ]
            },
            {
                original: v1,
                thumbnail: v1t,
                originalClass: 'featured-slide',
                thumbnailClass: 'featured-thumb',
                description: 'Custom class for slides & thumbnails'
            },
        ]
            // .concat(this._getStaticImages())
        ;

        return (
            // <ImageGallery items={images} />
            <ImageGallery
                ref={i => this._imageGallery = i}
                items={images}
                lazyLoad={false}
                onClick={this._onImageClick.bind(this)}
                onImageLoad={this._onImageLoad}
                onSlide={this._onSlide.bind(this)}
                onPause={this._onPause.bind(this)}
                onScreenChange={this._onScreenChange.bind(this)}
                onPlay={this._onPlay.bind(this)}
                infinite={this.state.infinite}
                showBullets={this.state.showBullets}
                showFullscreenButton={this.state.showFullscreenButton && this.state.showGalleryFullscreenButton}
                showPlayButton={this.state.showPlayButton && this.state.showGalleryPlayButton}
                showThumbnails={this.state.showThumbnails}
                showIndex={this.state.showIndex}
                showNav={this.state.showNav}
                isRTL={this.state.isRTL}
                thumbnailPosition={this.state.thumbnailPosition}
                slideDuration={parseInt(this.state.slideDuration)}
                slideInterval={parseInt(this.state.slideInterval)}
                slideOnThumbnailOver={this.state.slideOnThumbnailOver}
                additionalClass="app-image-gallery"
            />
        );
    }

    _onImageClick(event) {
        console.debug('clicked on image', event.target, 'at index', this._imageGallery.getCurrentIndex());
    }

    _onImageLoad(event) {
        console.debug('loaded image', event.target.src);
    }

    _onSlide(index) {
        // this._resetVideo();
        console.debug('slid to index', index);
    }

    _onPause(index) {
        console.debug('paused on index', index);
    }

    _onScreenChange(fullScreenElement) {
        console.debug('isFullScreen?', !!fullScreenElement);
    }

    _onPlay(index) {
        console.debug('playing from index', index);
    }

    _handleInputChange(state, event) {
        this.setState({[state]: event.target.value});
    }

    _handleCheckboxChange(state, event) {
        this.setState({[state]: event.target.checked});
    }

    _handleThumbnailPositionChange(event) {
        this.setState({thumbnailPosition: event.target.value});
    }

    render() {
        // return this.lightBox();
        return(
            // <div className="container">
                <div className="collection">
                    {this.imageGallery()} </div>
            // </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        items: state.items
    }
}

const mapDispatchToProps= (dispatch)=>{
    return{
        addToCart: (id)=>{dispatch(addToCart(id))},
        getDummyData: (data)=>{dispatch(getDummyData(data))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AkGallery);