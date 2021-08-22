export default function(mainContainer) {
    return {
        mounted() {
            this.$bus.$on("setMainScroll", this.setMainScroll)
            this.$refs[mainContainer].addEventListener("scroll", this.handleScroll);
        },
        beforeDestroyed() {
            this.$bus.$emit("mainScroll");
            this.$refs[mainContainer].removeEventListener("scroll", this.handleScroll);
            this.$bus.$off("setMainScroll", this.setMainScroll)
        },
        methods: {
            handleScroll() {
                this.$bus.$emit("mainScroll", this.$refs[mainContainer]) //第二个参数可以不传
            },
            setMainScroll(top) {
                if (!this.$refs[mainContainer]) {
                    return
                }
                this.$refs[mainContainer].scrollTop = top
            },
        }
    }
}