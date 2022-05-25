import React from 'react'

export const About = () => {
  return (
    <div className="container">

        <h1 className="my-4">Creator: <b><a href="https://www.linkedin.com/in/hitu04/" target="_blank">Hitesh Mewada</a></b></h1>
        <div className="d-flex flex-row bd-highlight mb-3">
            <div className="p-2 bd-highlight">
                <p className="lead text-dark">
                    <h2>
                    I am an undergraduate student from Shree LR TIWARI COLLEGE OF ENGINEERING who is looking for an internship in web and android development. As I                   am a fresher, I am open to work in any domain.
                    I am flexible with languages like c++, c, java and I am a competitive programmer who learns and code every day by solving variety of problems.
                    </h2>
                </p>
            </div>
            {/* <!-- <div className="p-2 bd-highlight">Flex item 3</div> --> */}
        </div>

    </div>
    
  )
}
