export default function(data = null) {
    return {
        data() {
            return {
                isLoading: true,
                data: data,
            }
        },
        async created() {
            this.data = await this.fetchData()
            this.isLoading = false;
        },
    }
}