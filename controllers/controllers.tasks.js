import Task from "../models/models.tasks.js"
const handleCreateTasks=async(req,res)=>{
    const {name,description}=req.body
    const newTask=new Task({name,description})
    await newTask.save()
    res.status(200).json({message:"Task created successfully",data:newTask})
}
const handleGetTasks=async(req,res)=>{
    try {
        const tasks = await Task.find();
        const formattedTasks = tasks.map(task => ({
            ...task._doc,
            createdAt: task.createdAt.toLocaleString(),
            updatedAt: task.updatedAt.toLocaleString(),
        }));
        res.json(formattedTasks);
    } catch (err) {
       return res.status(500).json({ message: err.message });
    }
}
const handleUpdateTask= async (req, res) => {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedTask);
}
const handleDeleteTask=async(req,res)=>{
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: 'Task deleted' });
}
export {
    handleCreateTasks,
    handleGetTasks,
    handleUpdateTask,
    handleDeleteTask,

}