
const RequestModal = () => {
    return (
        <div>
            <div className="hero min-h- bg-base-200">
                <div className="hero-content flex-col">
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-2">
                        <div className="flex gap-2 items-center">
                            <h3 className="w-2/5">Food Name </h3>
                            <input type="text" placeholder="Type here" className="input input-bordered input-success w-96 max-w-xs" />
                        </div>

                        <div className="flex gap-2 items-center">
                            <h3 className="w-2/5">Food Image </h3>
                            <input type="text" placeholder="Type here" className="input input-bordered input-success w-96 max-w-xs" />
                        </div>
                        <div className="flex gap-2 items-center">
                            <h3 className="w-2/5">Food Id </h3>
                            <input type="text" placeholder="Type here" className="input input-bordered input-success w-96 max-w-xs" />
                        </div>

                        <div className="flex gap-2 items-center">
                            <h3 className="w-2/5">Donator Name </h3>
                            <input type="text" placeholder="Type here" className="input input-bordered input-success w-96 max-w-xs" />
                        </div>
                        <div className="flex gap-2 items-center">
                            <h3 className="w-2/5">User Email </h3>
                            <input type="text" placeholder="Type here" className="input input-bordered input-success w-96 max-w-xs" />
                        </div>

                        <div className="flex gap-2 items-center">
                            <h3 className="w-2/5">Request Date </h3>
                            <input type="text" placeholder="Type here" className="input input-bordered input-success w-96 max-w-xs" />
                        </div>
                        <div className="flex gap-2 items-center">
                            <h3 className="w-2/5">Pickup Location </h3>
                            <input type="text" placeholder="Type here" className="input input-bordered input-success w-96 max-w-xs" />
                        </div>

                        <div className="flex gap-2 items-center">
                            <h3 className="w-2/5">Expire Date </h3>
                            <input type="text" placeholder="Type here" className="input input-bordered input-success w-96 max-w-xs" />
                        </div>

                        <div className="flex gap-2 items-center">
                            <h3 className="w-2/5">Additional Notes </h3>
                            <input type="text" placeholder="Type here" className="input input-bordered input-success w-96 max-w-xs" />
                        </div>

                        <div className="flex gap-2 items-center">
                            <h3 className="w-2/5">Donation Money </h3>
                            <input type="text" placeholder="Type here" className="input input-bordered input-success w-96 max-w-xs" />
                        </div>
                    </div>
                    <div className="mx-auto flex items-center">
                            <button className="btn btn-primary btn-sm">Request</button>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default RequestModal;