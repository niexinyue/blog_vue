<template>
    <div class="form-container">
        <form @submit.prevent="handleSubmit" ref="form">
            <div class="nickname item">
                <div>
                    <input type="text" placeholder="用户昵称" v-model="form.nickname"
                    maxlength="10">
                    <span class="tips">{{form.nickname.length}}/10</span>
                </div>
                <div class="error">{{error.nickname}}</div>
            </div>
            <div class="content item">
                <div>
                    <textarea type="text" value="输入内容"
                    maxlength="300"
                    v-model="form.content"
                    placeholder="请输入内容"></textarea>
                    <span class="tips">{{form.content.length}}/300</span>
                </div>
                <div class="error">{{error.content}}</div>
            </div>
            <div class="item">
                <button :disabled="isSubmitting">
                    {{isSubmitting ? "提交中..." : "提交"}}
                </button>
            </div>
        </form>
    </div>
</template>
<script>
import showMessage from "@/utils/popMessage.js"
export default {
    data(){
        return {
            form:{
                nickname:"",
                content:""
            },
            error:{
                nickname:"",
                content:"",
            },
            isSubmitting:false
        }
    },
    methods:{
        handleSubmit(){
            this.error.nickname = this.form.nickname ? "" : "请输入名称";
            this.error.content = this.form.content ? "" : "请输入内容";
            if(this.error.nickname || this.error.content){
                return;
            }
            this.isSubmitting = true;
            this.$emit("submitI",this.form,(msg)=>{
                showMessage({
                    type: "success",
                    message:msg,
                    duration:1000,
                    dom:this.$refs.form,
                    callBack:()=>{
                        this.form.nickname = "";
                        this.form.content = "";
                        this.isSubmitting = false
                    }
                })
            })
        }
    }
}
</script>
<style scoped lang="less">
@import "~@/styles/var.less";
form-container{
    margin-bottom: 20px;
    overflow: hidden;
}
.item{
    margin-bottom: 8px;
}
.nickname>div{
    position: relative;
    width: 50%;
}
.content>div{
    position: relative;
}
.tips{
    position: absolute;
    right: 5px;
    bottom: 5px;
    color: #b4b8bc;
    font-size: 12px;
}
input,textarea{
    display: block;
    width: 100%;
    box-sizing: border-box;
    border: 1px dashed @gray;
    outline: none;
    color: @words;
    font-size: 14px;
    border-radius: 4px;
    &:focus{
        border-color:@primary;
    }
}
input {
  padding: 0 15px;
  height: 40px;
}
textarea {
  resize: none;
  padding: 8px 15px;
  height: 120px;
}
.error {
  margin-top: 6px;
  color: @danger;
  font-size: 14px;
  height: 20px;
  line-height: 20px;
}
button {
  position: relative;
  cursor: pointer;
  border: none;
  outline: none;
  width: 100px;
  height: 34px;
  color: #fff;
  border-radius: 4px;
  background: @primary;
  &:hover {
    background: darken(@primary, 10%);
  }
  &:disabled {
    background: lighten(@primary, 20%);
    cursor: not-allowed;
  }
}
</style>