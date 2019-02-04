const storage = {
    fetch() {   //?
        const arr = [];
        

        if(localStorage.length > 0) {
          for( var i = 0; i < localStorage.length ; i++ ) {
            if(localStorage.key(i) !== 'loglevel:webpack-dev-server' ){
                arr.push( JSON.parse(localStorage.getItem(localStorage.key(i))) );
            }
          }
        }
        return arr;
    }
};

    state : {
        addContexts : storage.fetch()
        // headerText: ' TODO Practice! '
    };

    //getters: getters,
    const getters, //축약가능
    // getters: {
    //     storedContexts(state) {
    //         return state.addContexts;
    //     }
    // },
    // 아래 값이 엄청 많아질경우 분리해야 보기 좋음... 
    mutations

})

