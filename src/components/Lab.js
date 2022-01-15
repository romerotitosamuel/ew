const Lab = () => {
    /*  import { doc, setDoc } from "firebase/firestore";
        const cityRef = doc(db, 'cities', 'BJ');
        setDoc(cityRef, { capital: true }, { merge: true }); */

        
    return (<>
        <div className = 'labBody'>
            <div className='labList'>
                <h3>La lista</h3>
            </div>
            <div className='labEdit'>
                <h3>la edicion</h3>
            </div>
            <div className='labShow'>
                <h3>la vista previa</h3>
            </div>
        </div>
    </>)
}
export default Lab