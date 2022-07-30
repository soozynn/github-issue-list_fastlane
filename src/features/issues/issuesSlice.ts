import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface Issue {
  number: string;
  title: string;
  created_at: string;
  comments: string;
  photo_url: string;
}

interface IssueListState {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  error: string | null;
  issues: Issue[];
}

interface ServerError {
  statusCode: number;
  description: string;
}

const initialState: IssueListState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  error: "",
  issues: [],
};

export const fetchIssuesAsync = createAsyncThunk<
  Issue[],
  void,
  {
    rejectValue: ServerError;
  }
>("issues/fetch", async (_, { rejectWithValue }) => {
  try {
    const response = await fetch(
      `https://api.github.com/repos/facebook/create-react-app/issues`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return rejectWithValue(error as ServerError);
  }
});

export const issuesSlice = createSlice({
  name: "issues",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchIssuesAsync.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.error = null;
      })
      .addCase(fetchIssuesAsync.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        // 걸러주기
        state.issues.push(...payload);
        state.error = null;
      })
      .addCase(fetchIssuesAsync.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.issues = [];
        // state.error = payload || "Error: Something went wrong";
      });
  },
});

export default issuesSlice.reducer;
