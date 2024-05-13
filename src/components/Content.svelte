<script lang="ts">
	import { Avatar } from "@skeletonlabs/skeleton";
	import { Edit2Icon, MessageCircleIcon, PlusCircleIcon, PocketIcon } from "svelte-feather-icons";
 
 


  function allowDrop(event) {
    event.preventDefault();
  }

  function drag(event) {
    console.log("dragging")
    event.preventDefault();
    event.dataTransfer.setData("text", event.target.id);
  }

  function drop(event) {
    console.log("dropping");
    event.preventDefault();
    const data = event.dataTransfer.getData('text/plain');
    event.target.appendChild(document.getElementById(data)!);
  } 
</script>

<div class="bg-slate-200"> 
  <span class="chip variant-filled-secondary text-3xl align-top  bg-slate-200 flex justify-between items-center">
    <span class="chip variant-filled-secondary text-3xl align-top bg-slate-200 flex justify-between items-center">
      <div class="flex items-center justify-between">
        <span>Studio Board</span>
        <div class="flex items-center">
            <PocketIcon size="24" />
            <Avatar src="https://images.unsplash.com/photo-1617296538902-887900d9b592?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzExMDB8&ixlib=rb-4.0.3&w=128&h=128&auto=format&fit=crop" width="w-10" class="rounded-full" />
        </div>
    </div>
    
  </span>
</div>

<div class="flex justify-center content-500 bg-slate-200">
  <div class="w-1/4 p-4" ondrop="drop(event)" ondragover="allowDrop(event)">
    <div class="bg-white border border-gray-200 rounded-lg shadow-md">
      <div class="p-4 border-t-4 border-indigo-500 ..." >
        <header class="card-header text-cyan-700 text-2xl" >Backlog</header>
        <div class="card" draggable="true" ondragstart="drag(event)" ondrop="drop(event)"> 
          <header class="card-header"><span class="badge variant-filled-tertiary text-xl bg-indigo-400 text-white">Low Priority</span></header>
          <section class="p-4">Company Website redesign</section>
          <footer class="card-footer flex justify-between">
            <div class="flex">
              <Edit2Icon size="20"/>
              <span class="mx-2"></span> 
              <MessageCircleIcon size="20" />
            </div>
            <Avatar src="https://images.unsplash.com/photo-1617296538902-887900d9b592?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzExMDB8&ixlib=rb-4.0.3&w=128&h=128&auto=format&fit=crop" width="w-10" class="rounded-full" />
        </footer>
        
        
         
        </div>
        <div class="card" draggable="true" ondragstart="drag(event)" ondrop="drop(event)">
          <header class="card-header"><span class="badge variant-filled-tertiary text-xl bg-teal-500 text-white">Med Priority</span></header>
          <section class="p-4">Mobile app login process prototype</section>
          <footer class="card-footer flex justify-between">
            <div class="flex">
              <Edit2Icon size="20"/>
              <span class="mx-2"></span> 
              <MessageCircleIcon size="20" />
            </div>
            <Avatar src="https://images.unsplash.com/photo-1617296538902-887900d9b592?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzExMDB8&ixlib=rb-4.0.3&w=128&h=128&auto=format&fit=crop" width="w-10" class="rounded-full" />
        </footer>
        </div>
        <div class="card" draggable="true" ondragstart="drag(event)" ondrop="drop(event)">
          <header class="card-header"><span class="badge variant-filled-tertiary text-xl bg-red-400 text-white">High Priority</span></header>
          <section class="p-4">Company Website redesign</section>
          <footer class="card-footer">Footer</footer>
        </div>
        <footer class="card-footer flex justify-between">
          <div class="flex">
            <Edit2Icon size="20"/>
            <span class="mx-2"></span> 
            <MessageCircleIcon size="20" />
          </div>
          <Avatar src="https://images.unsplash.com/photo-1617296538902-887900d9b592?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzExMDB8&ixlib=rb-4.0.3&w=128&h=128&auto=format&fit=crop" width="w-10" class="rounded-full" />
      </footer>
      </div>
    </div>
  </div>



  
    <div class="w-1/4 p-4" ondrop="drop(event)" ondragstart="drag(event)" ondragover="allowDrop(event)">
      <div class="bg-white border border-gray-200 rounded-lg shadow-md">
        <div class="p-4  border-t-4 border-orange-300 ... ">
          
          <p class="text-gray-600"><div class="card" >
            <header class="card-header text-cyan-700 text-2xl ">In progress</header>
            <section class="p-4"><div class="card" draggable="true" ondragstart="drag(event)" ondragover="allowDrop(event)" >
                <header class="card-header" ><span class="badge variant-filled-tertiary text-xl bg-red-400 text-white">High Priority</span></header>
                <section class="p-4">Company Website redesign</section>
                <footer class="card-footer flex justify-between">
                  <div class="flex">
                    <Edit2Icon size="20"/>
                    <span class="mx-2"></span> 
                    <MessageCircleIcon size="20" />
                  </div>
                  <Avatar src="https://images.unsplash.com/photo-1617296538902-887900d9b592?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzExMDB8&ixlib=rb-4.0.3&w=128&h=128&auto=format&fit=crop" width="w-10" class="rounded-full" />
              </footer>
            </div>
            <div class="card" draggable="true" ondragstart="drag(event)" ondragover="allowDrop(event)">
                <header class="card-header"><span class="badge variant-filled-tertiary text-xl bg-teal-500 text-white">Med Priority</span></header>
                <section class="p-4">Mobile app login process prototype</section>
                <footer class="card-footer flex justify-between">
                  <div class="flex">
                    <Edit2Icon size="20"/>
                    <span class="mx-2"></span> 
                    <MessageCircleIcon size="20" />
                  </div>
                  <Avatar src="https://images.unsplash.com/photo-1617296538902-887900d9b592?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzExMDB8&ixlib=rb-4.0.3&w=128&h=128&auto=format&fit=crop" width="w-10" class="rounded-full" />
              </footer>
            </div>
            <div class="card" draggable="true" ondragstart="drag(event)" ondragover="allowDrop(event)" >
                <header class="card-header"><span class="badge variant-filled-tertiary text-xl bg-indigo-400 text-white">Low Priority</span></header>
                <section class="p-4">Company Website redesign</section>
                <footer class="card-footer flex justify-between">
                  <div class="flex">
                    <Edit2Icon size="20"/>
                    <span class="mx-2"></span> 
                    <MessageCircleIcon size="20" />
                  </div>
                  <Avatar src="https://images.unsplash.com/photo-1617296538902-887900d9b592?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzExMDB8&ixlib=rb-4.0.3&w=128&h=128&auto=format&fit=crop" width="w-10" class="rounded-full" />
              </footer>
            </div>
           </section>
           <footer class="card-footer flex items-center justify-center">
            <span class="mr-2">Add Task</span>
            <PlusCircleIcon size="40" class="fill-slate-700 text-white cursor-pointer"/>
        </footer>
        
          
        </div>
        </div>
      </div>
    </div>
    <div class="w-1/4 p-4" ondrop="drop(event)" ondragstart="drag(event)" ondragover="allowDrop(event)">
      <div class="bg-white border border-gray-200 rounded-lg shadow-md">
        <div class="p-4 border-t-4 border-indigo-500 ...">
          <p class="text-gray-600"><div class="card" >
            <header class="card-header text-cyan-700 text-2xl">Review</header>
            <section class="p-4"><div class="card"  draggable="true" ondragstart="drag(event)" ondragover="allowDrop(event)">
                <header class="card-header"><span class="badge variant-filled-tertiary text-xl bg-indigo-400 text-white">Low Priority</span></header>
                <section class="p-4">Company Website redesign</section>
                <footer class="card-footer flex justify-between">
                  <div class="flex">
                    <Edit2Icon size="20"/>
                    <span class="mx-2"></span> 
                    <MessageCircleIcon size="20" />
                  </div>
                  <Avatar src="https://images.unsplash.com/photo-1617296538902-887900d9b592?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzExMDB8&ixlib=rb-4.0.3&w=128&h=128&auto=format&fit=crop" width="w-10" class="rounded-full" />
              </footer>
            </div>
            <div class="card" draggable="true" ondragstart="drag(event)" >
                <header class="card-header"><span class="badge variant-filled-tertiary text-xl bg-red-500 text-white">High Priority</span></header>
                <section class="p-4">Mobile app login process prototype</section>
                <footer class="card-footer flex justify-between">
                  <div class="flex">
                    <Edit2Icon size="20"/>
                    <span class="mx-2"></span> 
                    <MessageCircleIcon size="20" />
                  </div>
                  <Avatar src="https://images.unsplash.com/photo-1617296538902-887900d9b592?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzExMDB8&ixlib=rb-4.0.3&w=128&h=128&auto=format&fit=crop" width="w-10" class="rounded-full" />
              </footer>
            <div class="card" draggable="true" ondragstart="drag(event)" >
              <header class="card-header"><span class="badge variant-filled-tertiary text-xl bg-teal-500 text-white">Med Priority</span></header>
              <section class="p-4">Shopping cart and product catalog</section>
              <footer class="card-footer flex justify-between">
                <div class="flex">
                  <Edit2Icon size="20"/>
                  <span class="mx-2"></span> 
                  <MessageCircleIcon size="20" />
                </div>
                <Avatar src="https://images.unsplash.com/photo-1617296538902-887900d9b592?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzExMDB8&ixlib=rb-4.0.3&w=128&h=128&auto=format&fit=crop" width="w-10" class="rounded-full" />
            </footer>
            <div class="card" draggable="true" ondragstart="drag(event)" >
                <header class="card-header"><span class="badge variant-filled-tertiary text-xl bg-indigo-400 text-white">low Priority</span></header>
                <section class="p-4">Company Website redesign</section>
                <footer class="card-footer flex justify-between">
                  <div class="flex">
                    <Edit2Icon size="20"/>
                    <span class="mx-2"></span> 
                    <MessageCircleIcon size="20" />
                  </div>
                  <Avatar src="https://images.unsplash.com/photo-1617296538902-887900d9b592?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzExMDB8&ixlib=rb-4.0.3&w=128&h=128&auto=format&fit=crop" width="w-10" class="rounded-full" />
              </footer>
            </div>
           </section>
           <footer class="card-footer flex items-center justify-center">
            <span class="mr-2">Add Task</span>
            <PlusCircleIcon size="40" class="fill-slate-700 text-white cursor-pointer"/>
        </footer>
        
        </div>
        </div>
      </div>
    </div>
    <div class="w-1/4 p-4" ondrop="drop(event)" ondragstart="drag(event)" ondragover="allowDrop(event)">
      <div class="bg-white border border-gray-200 rounded-lg shadow-md">
        <div class="p-4 border-t-4 border-lime-500 ...">
       
          <p class="text-gray-600"><div class="card" >
            <header class="card-header text-cyan-700 text-2xl">Complete</header>
            <section class="p-4"><div class="card"  draggable="true" ondragstart="drag(event)" ondragover="allowDrop(event)" >
                <header class="card-header"><span class="badge variant-filled-tertiary text-xl bg-indigo-400 text-white">Low Priority</span></header>
                <section class="p-4">Company Website redesign</section>
                <footer class="card-footer flex justify-between">
                  <div class="flex">
                    <Edit2Icon size="20"/>
                    <span class="mx-2"></span> 
                    <MessageCircleIcon size="20" />
                  </div>
                  <Avatar src="https://images.unsplash.com/photo-1617296538902-887900d9b592?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzExMDB8&ixlib=rb-4.0.3&w=128&h=128&auto=format&fit=crop" width="w-10" class="rounded-full" />
              </footer>
            </div>
            <div class="card" draggable="true" ondragstart="drag(event)" ondragover="allowDrop(event)">
                <header class="card-header"><span class="badge variant-filled-tertiary text-xl bg-teal-500 text-white">Med Priority</span></header>
                <section class="p-4">Mobile app login process prototype</section>
                <footer class="card-footer flex justify-between">
                  <div class="flex">
                    <Edit2Icon size="20"/>
                    <span class="mx-2"></span> 
                    <MessageCircleIcon size="20" />
                  </div>
                  <Avatar src="https://images.unsplash.com/photo-1617296538902-887900d9b592?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzExMDB8&ixlib=rb-4.0.3&w=128&h=128&auto=format&fit=crop" width="w-10" class="rounded-full" />
              </footer>
            </div>
            <div class="card" draggable="true" ondragstart="drag(event)" ondragover="allowDrop(event)">
              <header class="card-header"><span class="badge variant-filled-tertiary text-xl bg-indigo-400 text-white">Low Priority</span></header>
              <section class="p-4">User profile prototypes</section>
              <footer class="card-footer flex justify-between">
                <div class="flex">
                  <Edit2Icon size="20"/>
                  <span class="mx-2"></span> 
                  <MessageCircleIcon size="20" />
                </div>
                <Avatar src="https://images.unsplash.com/photo-1617296538902-887900d9b592?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzExMDB8&ixlib=rb-4.0.3&w=128&h=128&auto=format&fit=crop" width="w-10" class="rounded-full" />
            </footer>
          </div>
            <div class="card" draggable="true" ondragstart="drag(event)" ondragover="allowDrop(event)">
                <header class="card-header"><span class="badge variant-filled-tertiary text-xl bg-red-500 text-white">High Priority</span></header>
                <section class="p-4">Company Website redesign</section>
                <footer class="card-footer flex justify-between">
                  <div class="flex">
                    <Edit2Icon size="20"/>
                    <span class="mx-2"></span> 
                    <MessageCircleIcon size="20" />
                  </div>
                  <Avatar src="https://images.unsplash.com/photo-1617296538902-887900d9b592?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzExMDB8&ixlib=rb-4.0.3&w=128&h=128&auto=format&fit=crop" width="w-10" class="rounded-full" />
              </footer>
            </div>
           </section>
           <footer class="card-footer flex items-center justify-center">
            <span class="mr-2">Add Task</span>
            <PlusCircleIcon size="40" class="fill-slate-700 text-white cursor-pointer"/>
        </footer>
        
        </div>
        </div>
      </div>
    </div>
  </div>
