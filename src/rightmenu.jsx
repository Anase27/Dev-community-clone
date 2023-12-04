import { v4 as uuidv4 } from 'uuid';
let blogs = JSON.parse(localStorage.getItem("blogs"));


export default function Rightmenu(){
    return(
        <>
            <div className="right-panel-active-discussion-outer-container">
                <div className="right-panel-active-discussion-heading">
                    <h2>Active discussinon</h2>
                </div>
                <div className="right-panel-active-discussion-container">
                    {blogs.map((e, index) =>
                            <div key={uuidv4()} className="right-panel-active-discussion-tile">
                                <div className="right-panel-active-discussion-title">
                                    <span>{e.title}</span>
                                </div>
                                <div className="right-panel-active-discussion-comments">
                                    <span>{2*(index+1)} Comments</span>
                                </div>
                            </div>
                        )}
                </div>
            </div>
        </>
    )
}