export default function HelloWorld(){
    const propsUserCard={
        nama:"jessica NS",
        nim:"54646",
        tanggal:"22-02-12"
    }

    return (
        <div>
            <h1>HELLO WORLD</h1>
            <p>SELAMAT BELAJAR REACTJS</p>
            <p>HI JESSICA CANTIK </p>
            <GreetingBinjai/>
            <QuoteText/>
            <UserCard {... propsUserCard}/>
            <img src="img/images.jpg" alt="logo" />
        </div>
    )

}

function GreetingBinjai(){
    return (
        <>
        <small>
            salam dari binjai
        </small>
        </>
 
    )
}

function QuoteText(){
    const text="Mulutmu Harimau mu ";
    const text2="Aku ingin jadi Princess";
    return (
        <>
           <hr />
           <p>{text.toLowerCase()}</p>
           <p>{text2.toUpperCase()}</p>
        </>
 
    )
}
function UserCard(props){
   
    return (
        <>
           <hr />
           <h3>Nama :{props.nama}</h3>
           <p>NIM: {props.nim}</p>
           <p>Tanggal :{props.tanggal}</p>
        </>
 
    )
}