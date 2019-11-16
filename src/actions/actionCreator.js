import { getslidList } from "@apis/home.js"//引入apis
export const slideListAction = () => {
    let action = (data) => ({
        type:"SLIDE_LIST",
        value:data
    })

    return async function(){
        let data = await getslidList();
        console.log(data)
    }
}
//发送action