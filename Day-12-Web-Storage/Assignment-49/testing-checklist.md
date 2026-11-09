
# Persistent To-Do App – Testing Checklist

| No. | Test Case | Expected Result | Status |
|---|---|---|---|
| 1 | Add a new task | Task appears in the list | Pass |
| 2 | Add an empty task | Alert message appears | Pass |
| 3 | Complete a task | Task gets a line through it | Pass |
| 4 | Delete a task | Task disappears | Pass |
| 5 | Select Pending filter | Only pending tasks appear | Pass |
| 6 | Select Completed filter | Only completed tasks appear | Pass |
| 7 | Refresh the webpage | Saved tasks remain visible | Pass |
| 8 | Close and reopen the webpage | Saved tasks are restored | Pass |

## Conclusion

The application uses localStorage to save tasks permanently
until the browser's stored site data is cleared.

The application supports adding, completing, deleting and
filtering tasks.
