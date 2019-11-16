import {slideListAction} from "@actions/actionCreator";//引入actions/actionCreator

export const mapStateToProps =(state)=>({

})

export const mapDispatchToProps =(dispatch)=>({
    getSlideList(){
          dispatch(slideListAction())
      }
})
//actionCreator发送action给mapprops