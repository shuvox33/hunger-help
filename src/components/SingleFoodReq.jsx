
const SingleFoodReq = ({ req }) => {

    const { reqName, reqImg, reqMail, requestDate, status } = req;

    const handleDelivered = () => {
        
    }

    return (
        <div>
            {
                <div className="mx-auto card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={reqImg} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{reqName}</h2>
                        <p>Email : {reqMail}</p>
                        <p>Request Date : {requestDate}</p>
                        <div className="card-actions">
                            {
                                (status === 'available') ?
                                    <button onClick={handleDelivered} className="btn btn-primary">Make Delivered</button>
                                    : <button className="btn btn-primary"> Delivered</button>
                            }
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default SingleFoodReq;