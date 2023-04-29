import React from "react";


export default function Meme() {

    const [meme, setMeme] = React.useState({
                                            topText: "",
                                            bottomText: "",
                                            randomImage: "http://i.imgflip.com/1bij.jpg"         
                            });

    const [allMemes, setAllMemes] = React.useState([]);

    //API Call
    React.useEffect(
        () => {
                fetch("https://api.imgflip.com/get_memes")
                    .then(response => response.json())
                    .then(data => setAllMemes(data.data.memes))
    }
    , [])

    //Input onChange
    function handleInputOnChange(event) {

        const {name, value} = event.target

        setMeme(prevMeme => ({
                                ...prevMeme,
                                [name]: value
                                })
        )

    }

    //Button onClick
    function getMemeImage() {

        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url

        setMeme(prevMeme => {
            return {
                ...prevMeme, 
                randomImage: url
            }
        })

    }
    
    return (

        <section className="section--meme">

            <div className="form">
                <input type="search" placeholder="Top text" onChange={handleInputOnChange} value={meme.topText} name="topText" />
                <input type="search" placeholder="Bottom text" onChange={handleInputOnChange} value={meme.bottomText} name="bottomText" />
                <button onClick={getMemeImage}>Get a new meme image 🖼 </button>
            </div>
            
             <div className="meme">
                <img src={ meme.randomImage } alt="Memes" className="meme--image"/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>

        </section>

    )

}


