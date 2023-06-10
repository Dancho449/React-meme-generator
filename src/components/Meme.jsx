import React from "react"

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    function handleChange(event) {
        setMeme(prevMeme => ({
            ...prevMeme,
            [event.target.name]: event.target.value
        }))
    }

    function getImage() {
        const random = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[random].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }
    return(
        <div className="meme-container">
            <div className="flex-input">
               <input 
               type="text" 
               className="input"
               placeholder="Top Text"
               name="topText"
               onChange={handleChange}
               value={meme.topText}
            />
            <input
               type="text" 
               placeholder="Bottom Text"
               className="input"
               name="bottomText"
               onChange={handleChange}
               value={meme.bottomText} 
            /> 
            </div>
            
            <button className="meme-btn" onClick={getImage}>Get a new meme image  🖼</button>
            <div className="meme">
                <img src={meme.randomImage} className="meme-img" />
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
        </div>
    )
}