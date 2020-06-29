import styled from 'styled-components'

export const  Container = styled.div `

    display: flex;
    justify-content: center;
    width: 100%;   
    margin-top: 120px;

` 
export const Table = styled.table`

    border-left: solid 4px #474F72 ;
    border-bottom: solid 4px #474F72;
    border-top: solid 4px rgb(0, 128, 128);
    border-right: solid 4px rgb(0, 128, 128);
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: transparent;
    width: 200px;
    height: 374px;

    input {
        text-align: left;
        margin:2;
        padding: 20;
        width: 190px;
        height: 40px;
        border: none;
        font-size: 20px;
    
}

input:focus{
    outline: none;
}


tbody{
    margin-top: 30px;
}

button {
    height: 60px;
    width: 46px;
    font-size: 17px;
    border: none; 
    margin-left: 1px;
    outline: none;
    background-color: rgb(72, 122, 154);

}

button:hover{
    cursor: pointer;
    border:solid 2px rgb(76, 76, 113) ;
   
}


`

export const Resultado = styled.div`

    width: 190px;
    height: 40px;
    background-color: #fff;
    display: flex;

    span{
        margin-left: 10px;
        align-items: left;
}

`