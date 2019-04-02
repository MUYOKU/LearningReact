const reducers = {
  /* アロー演算子は関数のリテラルを省略する書き方（）ではなく｛｝ */
  //START_READING :(state,action) =>( 間違っている
  START_READING :(state,action) =>{ //正しい
    return {
      ...state,
      status:1 ,
    };
  },
  FINISH_READING:(state , action)=>{
    return {
      ...state,
      status :2,
    };
  }
};

function Books(state = null, action){
  if(!reducers[action.type]){
    return state;
  }
  return reducers[action.type](state,action);
}

var action = { type: 'FINISH_READING'};
var state = 'START_READING';
var books = Books(state, action);
console.log(books);
