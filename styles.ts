import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  loadingText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  progressText: {
    fontSize: 16,
    color: "#666",
  },
  loadingSubtext: {
    fontSize: 14,
    color: "#888",
    textAlign: "center",
    fontStyle: "italic",
  },
  loader: {
    marginTop: 10,
  },
  messagesContainer: {
    flex: 1,
    padding: 16,
  },
  messagesContent: {
    flexGrow: 1,
    paddingBottom: 16,
    paddingTop: 62,
  },
  emptyState: {
    textAlign: "center",
    color: "#666",
    fontSize: 16,
    fontStyle: "italic",
    marginTop: 50,
  },
  messageContainer: {
    marginBottom: 12,
    padding: 12,
    borderRadius: 12,
    maxWidth: "85%",
  },
  userMessage: {
    alignSelf: "flex-end",
  },
  assistantMessage: {
    alignSelf: "flex-start",
  },
  messageRole: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#666",
  },
  messageText: {
    fontSize: 16,
    lineHeight: 22,
    color: "#000",
  },

  inputContainer: {
    padding: 16,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
    minHeight: 80,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 20,
    padding: 12,
    marginBottom: 12,
    backgroundColor: "#f9f9f9",
    maxHeight: 100,
    textAlignVertical: "top",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonWrapper: {
    flex: 1,
  },
  buttonSpacing: {
    marginLeft: 12,
  },
  errorText: {
    color: "red",
    textAlign: "center",
    padding: 8,
    fontSize: 12,
  },
})
