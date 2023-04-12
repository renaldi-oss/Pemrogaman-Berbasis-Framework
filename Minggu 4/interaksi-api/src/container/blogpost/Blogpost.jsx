import React from 'react'
import './Blogpost.css'

class Blogpost extends React.Component { 
    render() { 
        return (
            <div className="post-artikel">
                <h2>Daftar Artikel</h2>
                <div className="artikel">
                    <div className="gambar-artikel">
                        <img src="http://placeimg.com/80/80/tech" alt="thumnail" />
                    </div>
                    <div className="kontent-artikel">
                        <div className="judul-artikel">Judul Artikel</div>
                        <p className="isi-artikel">isi artikel</p>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Blogpost;