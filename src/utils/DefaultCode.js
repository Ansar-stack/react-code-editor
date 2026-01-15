export const defaultHtml = `<h1>Counter <span id="counter">0</span> </h1>
    <button type="button" id="counterButton">Increament Counter</button>
`;
export const defaultCss = `
    *{
    padding: 0,
    margin: 0,
    box-sizing: border-box,
}
    body{
        background-color: white;
        padding: 5px;
    }
    h1{
        font-size: 24px;
        font-weight: bolder; 
    }
    button{
        padding: 5px 10px;
        color: white;
        background-color: black;
        outline: 0px;
        border: 0px;
        border-radius: 5px;
        font-size: 17px;
        cursor: pointer;
    }
    
`;
export const defaultJs = `
    // Helper function to get element by id
    const getElement = (id="")=>{
        const element = document.getElementById(id);
        if(element)return element
            throw Error("Cannot Get Element");
        }
    function CounterApp(){
        let result = getElement('counter');
        let btn = getElement('counterButton');
        let counter = 0;
        btn.addEventListener('click', ()=>{
            // Increament Counter by 1
            counter++;
            // Add Counter Value to Result
            result.textContent = counter;
            })
    }
    CounterApp();
`;

