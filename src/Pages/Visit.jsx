import { Helmet } from "react-helmet";
import { ToastContainer, toast } from "react-toastify";

const Visit = () => {
    let count = 0;
    console.log(count);
    const handleSend = () => {
        count++;
        if (count <= 1) {
            const input = document.getElementById('problem');
            if (input.length < 30) {
                const container = document.getElementById('problem-container');
                const p = document.createElement('p');
                p.classList = `rounded-full mt-3 ml-3 bg-base-200 p-3 w-fit ml-auto mr-2 mb-5`;
                p.innerHTML = `
                <span>${input.value}</span>
                `;
                container.appendChild(p);
                input.value = '';
            }
            else{
                toast.error("can't send too long text")
            }
        }
        else {
            toast.error("can't send twice");
        }
    }
    return (
        <div>
            <Helmet>
                <title>Best Estates || Contact us</title>
            </Helmet>
            <h3 className="p-6 rounded-2xl ml-2 mr-3 bg-[#3D52A0] text-white font-bold text-center text-2xl my-3">Contact us</h3>
            <div className="flex border ml-2 mr-3 rounded-2xl my-9 lg:my-6 h-[300px]">
                <div className="border-r border-gray-400 border-dotted w-1/2 text-center flex flex-col justify-center">
                    <h3 className="font-bold underline text-2xl mb-5">Phone / Email</h3>
                    <p className=" mb-2 font-semibold">phone: <a className="text-[#3D52A0]" href="tel:5551234567">(555) 123-4567</a></p>
                    <p className="mb-2 font-semibold">Email: <a className="text-[#3D52A0]" href="mailto: example.user123@example.com">example.user123@example.com</a></p>
                </div>
                <div className="w-1/2 relative">
                    <h4 className="font-bold underline text-2xl my-3 text-center">Send text</h4>
                    <div className="border m-4 h-[75%] rounded-2xl">
                        <p className="rounded-full mt-3 ml-3 inline-block bg-base-200 p-3">How can we help you.</p>
                        <div id="problem-container">

                        </div>
                        <div className="mr-3 absolute bottom-7 right-3">
                            <input type="text" className="bg-base-200 p-3 border-2 rounded-full mr-2 text-sm pl-4" placeholder="Type here" id="problem" />
                            <button id="btn" onClick={handleSend} className="btn lg:pt-0 pt-1 rounded-full bg-[#3D52A0] text-white">Send</button>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};
export default Visit;