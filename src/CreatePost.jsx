import logo from './assets/dev-logo.png'
import { Icon } from '@iconify-icon/react';
import { Link } from 'react-router-dom';
import { populateStorage } from './Maincontent';
import BlogsList from './Maincontent';
// import { blogs } from './Maincontent';
export default function CreatePost(){
    let base64String = '';
    // const outputDiv = document.querySelector(".create-post-top-part-image-container");
    // let base64String = '';
    let handleChange = async (e)=>{
        const file = e.target.files[0];
        base64String=await convertBase64(file);
        document.querySelector(".create-post-top-part-image-container img").src=base64String;        
        // console.log(outputDiv);
    }
    const convertBase64 = (file) =>{
        return new Promise((resolve,reject)=>{
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload=()=>{
                resolve(fileReader.result);
            };
            fileReader.onerror=(error)=>{
                reject(error);
            };
        })
    }
    const getData = ()=>{
        let blogs = JSON.parse(localStorage.getItem('blogs'));
        blogs.unshift(
            {
                "name":"Guest user",
                "date": "Dec 1",
                "title": document.querySelector("#Posttitle").value,
                "profile":"emojione-v1:wolf-face",
                "desc":document.querySelector("#postdesc").value,
                "img":base64String
            }
        )
        populateStorage(JSON.stringify(blogs));
        console.log(blogs);
    }
    return(
        <>
            <div className="createpost-box-outer-container">
                <div className="publish-post-cross-button">
                    <Link to='/'><Icon icon="teenyicons:x-outline" color="white" /></Link>
                </div>
                <form className='publish-post-form'>
                    <div className="create-post-nav-bar">
                        <div className="create-post-logo-title-container">
                            <img src={logo} alt="" className='create-post-logo'/>
                            <span className='create-post-title'>Create Post</span>
                        </div>
                        <div className="create-post-preview-edit-container">
                            <span className='create-post-edit'>Edit</span>
                            <span className='create-post-edit'>Preview</span>
                        </div>
                    </div>
                    <div className="create-post-input-fields-container">
                        <div className="create-post-top-part-outer-container">
                            <div className="create-post-top-part-container">
                                <div className="create-post-top-part-imagepart">
                                    <div className="create-post-add-image-button">
                                        <button type='button' className='image-input-button'>
                                            <label htmlFor='imageInput'>
                                                Add a cover Image
                                            </label>
                                        </button>
                                    </div>
                                    <div className="create-post-top-part-image-container">
                                        <img src="" alt="" style={{maxWidth:"540px",maxHeight:"150px"}}/>
                                    </div>
                                </div>
                                <input type="file" accept='image/*' id='imageInput' onChange={(e)=>{handleChange(e)}} />
                                <div className="post-title-input-area-container">
                                    <textarea type="text" aria-label='Post title' autoFocus placeholder='New post title here...' style={{resize:"none",fontSize:"64px"}} id='Posttitle'></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="create-post-bottom-part-container">
                            <div className="create-post-bottom-part-title">
                                <span>Post content</span>
                            </div>
                            <div className="create-post-bottom-part-desc-outer-container">
                                <div className="create-post-bottom-part-desc-container">
                                    <textarea aria-label='Post desc' type="text" placeholder='Write yout post content here...' style={{resize:"none"}} id='postdesc'></textarea>
                                </div>
                            </div>
                            <div className="create-post-bottom-part-publish-button">
                                <Link to='/'>
                                    <button type='button' onClick={getData}>
                                        Publish
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>

                </form>
            </div>
        </>
    )
}