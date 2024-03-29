import './tokenomics.css'

function Tokenomics (){
    return (
        <section className='Tokenomics'>
            <div className="token__container">
                <div className="token__header"><h1><span id='token_header'>TOKENOMICS</span></h1></div>
                <div className="token__table">
                    <div className="token__table-text"><p id='p1'>Symbol</p><p>SBEER</p></div>
                    <div className="token__table-text"><p id='p1'>Tax</p><p>0</p></div>
                    <div className="token__table-text"><p id='p1'>Liquidity</p> <p>Burned Forever</p></div>
                </div>
                <div className="token__table-subtitle"><p id='p1'>Token Address </p><p>Burned Forever</p></div>
                <div className="token__btn"><button>Buy $BEER</button></div>    


            </div>
        </section>
    )
}

export default Tokenomics; 