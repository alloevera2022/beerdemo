import './info.css'
import infoImg from './../../img/section_1.png'

function Info () {
    return (
        <section className='Info'>
        <div className="container">
            <div className="info__content">
                <div className="info__textcontent">
                <div className="info__header"><h2><span id='info_header'>INFO</span></h2></div>
                <div className="info__text"><p>In the diverse world of cryptocurrencies, $BEER emerges as a unique token that stands out amidst meme coins.  

$BEER brings together different elements of the crypto community, offering a space where everyone finds something appealing. It serves as a bonding agent between various projects and ideas, similar to how a bar is a meeting place for socializing and entertainment.</p></div>
            </div>          
            <div className="info_img"><img src={infoImg} alt="info_img" /></div>                
            </div>
        </div>
    </section>

    )
}

export default Info;