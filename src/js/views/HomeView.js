export default {
	name: "HomeView",
	data() {
		return {
			popup: false,
			todo: null,
			expires: "",
			text: "",
		};
	},
	methods: {
		initData() {
			const { todo } = localStorage;
			if (todo === undefined) {
				localStorage.setItem = "todo";
				localStorage.todo = JSON.stringify({
					lastId: -1,
					items: {},
				});
			}
			if (localStorage.todo) {
				this.todo = JSON.parse(localStorage.todo);
			}
		},
		getId(id) {
			return Number(id) + 1;
		},
		onSubmit() {
			const creted = new Date().toUTCString();

			this.todo.lastId += 1;
			this.todo.items[this.todo.lastId] = {
				text: this.text,
				creted: `${creted}`,
				expires: this.expires,
			};
			localStorage.todo = JSON.stringify(this.todo);
			this.showPopup();
		},
		showPopup() {
			this.popup = !this.popup;
		},
		formateDate(date) {
			return `${new Date(date).toLocaleDateString()} ${new Date(date).toLocaleTimeString()}`;
		},
		deleteElement(id) {
			const todo = JSON.parse(localStorage.todo);
			delete todo.items[id];
			this.todo = todo;
			localStorage.todo = JSON.stringify(todo);
		},
	},
	mounted() {
		this.initData();
	},
};
