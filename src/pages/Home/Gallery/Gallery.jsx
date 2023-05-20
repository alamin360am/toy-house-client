import './gallery.css'
import toy01 from './../../../../public/gallery/toy01.jpg'
import toy02 from './../../../../public/gallery/toy02.jpg'
import toy03 from './../../../../public/gallery/toy03.jpg'
import toy04 from './../../../../public/gallery/toy04.jpg'
import toy05 from './../../../../public/gallery/toy05.jpg'
import toy06 from './../../../../public/gallery/toy06.jpg'
import toy07 from './../../../../public/gallery/toy07.jpg'
import toy08 from './../../../../public/gallery/toy08.jpg'
import toy09 from './../../../../public/gallery/toy09.jpg'
import toy10 from './../../../../public/gallery/toy10.jpg'
import toy11 from './../../../../public/gallery/toy11.jpg'
import toy12 from './../../../../public/gallery/toy12.jpg'

const Gallery = () => {
    return (
        <section className='section-gallery'>
            <h2 className="primary-heading">Photo Gallery</h2>
            <div className="grid col-4">
                <div className="photo-box">
                    <img src={toy01} alt="" />
                </div>
                <div className="photo-box">
                    <img src={toy02} alt="" />
                </div>
                <div className="photo-box">
                    <img src={toy03} alt="" />
                </div>
                <div className="photo-box">
                    <img src={toy04} alt="" />
                </div>
                <div className="photo-box">
                    <img src={toy05} alt="" />
                </div>
                <div className="photo-box">
                    <img src={toy06} alt="" />
                </div>
                <div className="photo-box">
                    <img src={toy07} alt="" />
                </div>
                <div className="photo-box">
                    <img src={toy08} alt="" />
                </div>
                <div className="photo-box">
                    <img src={toy09} alt="" />
                </div>
                <div className="photo-box">
                    <img src={toy10} alt="" />
                </div>
                <div className="photo-box">
                    <img src={toy11} alt="" />
                </div>
                <div className="photo-box">
                    <img src={toy12} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Gallery;