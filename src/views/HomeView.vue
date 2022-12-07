<script src="../js/views/HomeView.js"></script>

<template>
	<header class="bg-slate-50 shadow-md">
		<div class="container flex mx-auto justify-between content-center py-4">
			<a class="text-slate-600" href="/">JS ToDo</a>
			<div class="cursor-pointer" @click="showPopup">
				<span class="sr-only">add</span>
				<svg
					class="w-32 h-32 fill-slate-600 hover:fill-slate-400 transition-colors duration-500"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 448 512"
				>
					<path
						d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-32 252c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92H92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"
					></path>
				</svg>
			</div>
		</div>
	</header>

	<div class="wrapper flex-1-auto py-6">
		<main class="container mx-auto js-cards-body" v-if="todo">
			<article
				v-for="(items, index) in todo.items"
				:key="index"
				class="shadow-lg rounded-md mb-7 bg-slate-50 p-4"
				:id="index"
			>
				<h2 class="font-semibold text-2xl mb-3">Todo #{{ getId(index) }}</h2>
				<div class="flex justify-between items-center">
					<div class="w-full box-border">
						<h3 class="font-medium mb-2">What to do</h3>
						<p v-html="items.text"></p>
					</div>
					<div class="min-w-[180px] box-border px-3">
						<h3 class="font-medium mb-2">Creted</h3>
						<p>{{ formateDate(items.creted) }}</p>
					</div>
					<div class="min-w-[180px] box-border px-3">
						<h3 class="font-medium mb-2">Expires</h3>
						<p>{{ formateDate(items.expires) }}</p>
					</div>
					<div class="max-w-[32px] p-2 cursor-pointer js-remove" @click="deleteElement(index)">
						<svg
							class="w-16 h-16 fill-rose-700"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 448 512"
						>
							<path
								d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"
							></path>
						</svg>
					</div>
				</div>
			</article>
		</main>
	</div>
	<div
		class="bg-slate-50 top-0 left-0 w-full h-full flex justify-center items-center z-1000 js-popup"
		:class="popup ? 'fixed' : 'hidden'"
	>
		<div class="bg-slate-800 text-slate-50 p-5 box-border rounded-md w-80">
			<h2 class="text-center mb-3">Create new ToDo</h2>
			<form class="w-full js-toDoForm" enctype="multipart/toDoForm-data" @submit.prevent="onSubmit">
				<label class="block mb-6">
					Until what date:
					<input
						class="block w-full text-slate-800 p-3 rounded-md mt-3"
						type="datetime-local"
						name="expires"
						v-model="expires"
					/>
				</label>
				<label class="block mb-6">
					What to do:
					<textarea
						class="w-full text-slate-800 p-3 rounded-md mt-3"
						rows="5"
						name="text"
						v-model="text"
					></textarea>
				</label>
				<div class="flex justify-between">
					<button class="block px-10 py-2 bg-green-800 rounded-md" type="submit">Add ToDo</button>
					<button
						class="block px-4 py-2 bg-pink-700 rounded-md js-close-toDoForm"
						type="reset"
						@click="showPopup"
					>
						<svg
							class="w-16 h-16 fill-slate-50"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 352 512"
						>
							<path
								d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
							></path>
						</svg>
					</button>
				</div>
			</form>
		</div>
	</div>
</template>
