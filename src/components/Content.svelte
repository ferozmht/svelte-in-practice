<script lang="ts">
	import { Avatar } from "@skeletonlabs/skeleton";
	import { Edit2Icon, EditIcon, MoreVerticalIcon, PhoneOffIcon, PocketIcon } from "svelte-feather-icons";
 
  function allowDrop(ev: DragEvent) {
  ev.preventDefault();
}

function drag(ev: DragEvent) {
  ev.dataTransfer.setData("text", (ev.target as HTMLElement).id);
}

function drop(ev: DragEvent) {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text");
  (ev.target as HTMLElement).appendChild(document.getElementById(data)!);
}

  
</script>



<div class= "bg-slate-200"> 
  <span class="chip variant-filled-secondary text-3xl align-top  bg-slate-200 flex justify-between items-center">
    <span class="chip variant-filled-secondary text-3xl align-top bg-slate-200 flex justify-between items-center">
      <span class="flex items-center">Studio Board <PocketIcon size="24" /></span>
      <Avatar src="https://images.unsplash.com/photo-1617296538902-887900d9b592?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzExMDB8&ixlib=rb-4.0.3&w=128&h=128&auto=format&fit=crop" width="w-10" class="rounded-full" />
    </span>
    
  
</div>


<div class="flex justify-center content-500  bg-slate-200">
  <div class="w-1/4 p-4">
    <div class="bg-white border border-gray-200 rounded-lg shadow-md">
      <div class="p-4">
        <header class="card-header text-cyan-700 text-2xl">Backlog</header>
        <div class="card" draggable="true" ondragstart="drag(event)">
          <header class="card-header"><span class="badge variant-filled-tertiary text-xl">Low Priority</span></header>
          <section class="p-4">Company Website redesign</section>
          <footer class="card-footer"><Edit2Icon size="20"/></footer>
        </div>
        <div class="card" draggable="true" ondragstart="drag(event)">
          <header class="card-header"><span class="badge variant-filled-tertiary text-xl">Med Priority</span></header>
          <section class="p-4">Mobile app login process prototype</section>
          <footer class="card-footer"><Edit2Icon size="20"/></footer>
        </div>
        <div class="card" draggable="true" ondragstart="drag(event)">
          <header class="card-header"><span class="badge variant-filled-tertiary text-xl">High Priority</span></header>
          <section class="p-4">Company Website redesign</section>
          <footer class="card-footer">Footer</footer>
        </div>
      </div>
      <footer class="card-footer right-4">Add Task</footer>
    </div>
  </div>
  
    <div class="w-1/4 p-4" ondrop="drop(event)" ondragover="allowDrop(event)">
      <div class="bg-white border border-gray-200 rounded-lg shadow-md">
        <div class="p-4">
          
          <p class="text-gray-600"><div class="card" >
            <header class="card-header text-cyan-700 text-2xl">In progress</header>
            <section class="p-4"><div class="card" >
                <header class="card-header" ><span class="badge variant-filled-tertiary text-xl">Low Priority</span></header>
                <section class="p-4">Company Website redesign</section>
                <footer class="card-footer"><Edit2Icon size="20"/> </footer>
            </div>
            <div class="card" draggable="true" ondragstart="drag(event)">
                <header class="card-header"><span class="badge variant-filled-tertiary text-xl">Med Priority</span></header>
                <section class="p-4">Mobile app login process prototype</section>
                <footer class="card-footer"><Edit2Icon size="20"/>   </footer>
            </div>
            <div class="card" draggable="true" ondragstart="drag(event)" >
                <header class="card-header"><span class="badge variant-filled-tertiary text-xl">High Priority</span></header>
                <section class="p-4">Company Website redesign</section>
                <footer class="card-footer">Footer  </footer>
            </div>
           </section>
            <footer class="card-footer right-4">Add Task</footer>
        </div>
        </div>
      </div>
    </div>
    <div class="w-1/4 p-4" ondrop="drop(event)" ondragover="allowDrop(event)">
      <div class="bg-white border border-gray-200 rounded-lg shadow-md">
        <div class="p-4">
          <p class="text-gray-600"><div class="card" >
            <header class="card-header text-cyan-700 text-2xl">Review</header>
            <section class="p-4"><div class="card" >
                <header class="card-header"><span class="badge variant-filled-tertiary text-xl">Low Priority</span></header>
                <section class="p-4">Company Website redesign</section>
                <footer class="card-footer"><Edit2Icon size="20"/> </footer>
            </div>
            <div class="card" draggable="true" ondragstart="drag(event)" >
                <header class="card-header"><span class="badge variant-filled-tertiary text-xl">Med Priority</span></header>
                <section class="p-4">Mobile app login process prototype</section>
                <footer class="card-footer"><Edit2Icon size="20"/>   </footer>
            </div>
            <div class="card" draggable="true" ondragstart="drag(event)" >
                <header class="card-header"><span class="badge variant-filled-tertiary text-xl">High Priority</span></header>
                <section class="p-4">Company Website redesign</section>
                <footer class="card-footer">Footer  </footer>
            </div>
           </section>
            <footer class="card-footer right-4">Add Task</footer>
        </div>
        </div>
      </div>
    </div>
    <div class="w-1/4 p-4" ondrop="drop(event)" ondragover="allowDrop(event)">
      <div class="bg-white border border-gray-200 rounded-lg shadow-md">
        <div class="p-4">
       
          <p class="text-gray-600"><div class="card" >
            <header class="card-header text-cyan-700 text-2xl">Complete</header>
            <section class="p-4"><div class="card" >
                <header class="card-header"><span class="badge variant-filled-tertiary text-xl">Low Priority</span></header>
                <section class="p-4">Company Website redesign</section>
                <footer class="card-footer"><Edit2Icon size="20"/> </footer>
            </div>
            <div class="card" draggable="true" ondragstart="drag(event)" >
                <header class="card-header"><span class="badge variant-filled-tertiary text-xl">Med Priority</span></header>
                <section class="p-4">Mobile app login process prototype</section>
                <footer class="card-footer"><Edit2Icon size="20"/>   </footer>
            </div>
            <div class="card" draggable="true" ondragstart="drag(event)" >
                <header class="card-header"><span class="badge variant-filled-tertiary text-xl">High Priority</span></header>
                <section class="p-4">Company Website redesign</section>
                <footer class="card-footer">Footer  </footer>
            </div>
           </section>
            <footer class="card-footer right-4">Add Task</footer>
        </div>
        </div>
      </div>
    </div>
  </div>