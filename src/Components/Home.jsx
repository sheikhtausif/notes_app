import React from 'react'
import Notes from './Notes'

const Home = () => {

    return (

        <div>
            <div className="container my-3">
                <h2>Add a note</h2>
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Add Title</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter a title..." />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Description..."></textarea>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Add</button>
                </form>
            </div>
            <Notes />
        </div>
    )
}

export default Home
