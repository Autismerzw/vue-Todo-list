<template>
  <div class="todo">
      <div class="todo-from">
          <input v-model="newItem" @keyup.enter="addItem(newItem)">
          <button class="fa fa-paper-plane plane"  @click='addItem(newItem)'></button>
      </div>
      <div class="todo-list">
          <ul>
              <li v-for="item in items" v-bind:class="{finish:item.isFinished}">
                  <span v-bind:class="[fa,checkbox,item.isFinished ? 'fa-toggle-on':'fa-toggle-off' ]" @click="finished(item)"></span>
                  <span>{{item.message}}</span>
                  <span class="fa fa-minus-circle delete"></span>
              </li>   
          </ul>
      </div>
  </div>
</template>
<script>
    import Store from '../store'
    // console.log(Store);
    export default {
        name: 'todo',
        data(){
            return {
                title:'测试完成',
                tHtml:'<span>这是插入的HTML</span>',
                items: Store.fetch(),
                fa:'fa',
                checkbox:'checkbox',
                newItem : ''
            }
        },
        watch:{
            items:{
                handler:function(items){
                    Store.save(items)
                },
                deep:true
            }
        },
        methods:{
            finished:function(item){
                item.isFinished = !item.isFinished 
            },
            addItem:function(newItem){
                this.items.push({
                    message: newItem,
                    isFinished:false
                })
                this.newItem = '';
            }
        }
    }
</script>
<style>
    *{
        padding: 0;
        -webkit-user-select:none; 
        -moz-user-select:none; 
        -ms-user-select:none; 
        user-select:none;
    }
    input{
        width: 65%;
        height: 40px;
        outline: none;
        padding: 5px 15px;
        background: #fff;
        border:none;
        border-radius: 5px;
        box-sizing: border-box;
        color: #F66;
    }
    input:hover{
        box-shadow: 3px 3px 10px #ccc;
    }
    input:focus{
        box-shadow: 3px 3px 10px #ccc;
    }
    .plane{
        height: 35px;
        background: #efefef;
        border:none;
        outline: none;
        padding: 0 12px;
         box-sizing: border-box;
         vertical-align: middle;
         color: #000;
         margin-left: -45px;
         background: #fff;
         cursor: pointer;
    }
    .plane:hover{
        color:#42b983;
    }
    ul{
        display: inline-block;
        width: 65%;
        height: 290px;
        background: #fff;
        border-radius: 10px;
        box-sizing: border-box;   
        overflow: auto;     
    }
    li{
        display: inline-block;
        width:100%;
        height: 40px;
        background: #fff;
        list-style: none;
        box-sizing: border-box;
        border-bottom: 1px rgba(66, 185, 131, 0.35) solid;
        line-height: 40px;
        text-align: left;
        padding: 0 10px;
        cursor: pointer;
    }
    li:nth-child(1){
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }
    li:hover .delete{
        display: block;
    }
    li span{
        margin-left: 15px;
    }
    .checkbox{
        display: inline-block;
        border:none;
        outline: none;
        cursor: pointer;
        color:rgba(66, 185, 131, 1);
    }
    .delete{
        color: #f66;
        float: right;
        margin-top:12px;
        display: none;
    }
    li.finish{
        background: #f66;
         color:#fff;
         cursor: pointer;
         border-color: #fff;
    }
    li.finish .checkbox{
        display: inline-block;
        border:none;
        outline: none;
        color:#fff;
    }
    li.finish .delete{
        color: #fff;
        float: right;
        margin-top:12px;
        display: block;
        cursor: pointer;
    }
</style>
