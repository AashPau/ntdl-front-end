import axios from "axios";
const apiEP = " http://localhost:8000/api/v1/tasks";

export const postNewTask = async (taskObj) => {
  try {
    const { data } = await axios.post(apiEP, taskObj);

    return data;
  } catch (error) {
    console.log(error);
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const getAllTasks = async () => {
  try {
    const response = await axios.get(apiEP);
    return response.data;
  } catch (error) {
    console.log(error);
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const deleteTasks = async (_id) => {
  try {
    const response = await axios.delete(apiEP + "/" + _id);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const updateTask = async (obj) => {
  try {
    const { data } = await axios.patch(apiEP, obj);
    return data;
  } catch (error) {
    console.log(error);
    return {
      status: "error",
      message: error.message,
    };
  }
};
