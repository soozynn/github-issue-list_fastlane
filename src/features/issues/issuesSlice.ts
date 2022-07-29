import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Issue {
  number: string;
  title: string;
  created_at: string;
  comments: string;
  image: string;
}

export interface IssueListState {
  loading: boolean;
  issues: Issue[];
  error: string;
}

const initialState: IssueListState = {
  loading: false,
  issues: [],
  error: "",
};

export const getIssuesAsync = createAsyncThunk("issues/getIssues", async () => {
  return fetch("https://api.github.com/repos/facebook/create-react-app/issues")
    .then((response) => response.json())
    .then((response) => console.log(response));
});

export const issuesSlice = createSlice({
  name: "issues",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getIssuesAsync.pending, (state) => {
      // both `state` and `action` are now correctly typed
      // based on the slice state and the `pending` action creator
    });
    // builder.addCase(
    //   getIssuesAsync.fulfilled,
    //   (state, action: PayloadAction<Issue[]>) => {
    //     state.status = true;
    //     state.issues = action.payload;
    //     state.error = "";
    //   }
    // );
    // builder.addCase(
    //   getIssuesAsync.rejected,
    //   (state, action: PayloadAction<Issue[]>) => {
    //     state.status = false;
    //     state.issues = [];
    //     state.error = action.error.message || "Something went wrong";
    //   }
    // );
  },
});

export default issuesSlice.reducer;
