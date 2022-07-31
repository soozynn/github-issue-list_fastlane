import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface Issue {
  number: string;
  title: string;
  created_at: string;
  comments: string;
  photo_url: string;
  id: string;
}

interface IssueListState {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  errorMessage: string | null;
  issues: Issue[];
}

const initialState: IssueListState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  errorMessage: null,
  issues: [],
};

export const fetchIssuesAsync = createAsyncThunk("issues/fetch", async () => {
  try {
    const response = await fetch(
      `https://api.github.com/repos/facebook/create-react-app/issues`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
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
        state.errorMessage = null;
      })
      .addCase(fetchIssuesAsync.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.issues.push(...payload);
        state.errorMessage = null;
      })
      .addCase(fetchIssuesAsync.rejected, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.issues = [];
        state.errorMessage = "Error: Something went wrong :(";
      });
  },
});

export default issuesSlice.reducer;
