
function LeakOfTheYear() {
    return (
            <div className="nes-container is-dark is-rounded is-centered me-3 with-title">
                <p className="title">Leak of the Year <span className="text-muted">28/12/22</span></p>
                <p className="text-muted">Can be viewed <a href="https://leakoftheyear.com">here</a> !</p>
                
                <div className="row">
                    <div className="col">
                        <img src={require('./ss01.png')} alt=""  width={"50%"} />
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <img src={require('./ss02.png')} alt=""  width={"50%"} />
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <img src={require('./ss03.png')} alt=""  width={"50%"} />
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <img src={require('./ss04.png')} alt=""  width={"50%"} />
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <img src={require('./ss05.png')} alt=""  width={"50%"} />
                    </div>
                </div>
            </div>
    );
}

export default LeakOfTheYear;