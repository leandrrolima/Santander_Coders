import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  OnInit,
} from '@angular/core';
import { Task } from 'src/models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {

  
  columns = [
    { name: 'To Do', id: 'toDo' },
    { name: 'In Progress', id: 'trabalhando' },
    { name: 'Done', id: 'finalizado' },
  ];

  @Input() tasks: Task[] = [];
  @Output() handleTask = new EventEmitter();

  tasksFiltradas: Task[] = [];
  editingTask: Task | null = null;



  ngOnInit() {
    this.tasksFiltradas = this.tasks;
  }
  
  
  selectedTask(task: Task) {
    this.editingTask = task;
  }
  
  

  saveTask() {
    if (this.editingTask) {
      const taskIndex = this.tasks.findIndex((task) => task === this.editingTask);
  
      if (taskIndex !== -1) {
        
        this.tasks[taskIndex] = { ...this.editingTask };
        this.editingTask = null; 
      }
    }
  }
  
  

  cancelEdit() {
    this.editingTask = null; 
  }


  handleFiltro(filtro: string) {
    if (filtro === 'all') {
      this.tasksFiltradas = this.tasks;
      return;
    }

    this.tasksFiltradas = this.tasks.filter((item) => {
      if (item.status === filtro) {
        return item;
      }
      return;
    });
  }
}
