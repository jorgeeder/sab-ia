import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#282A36",
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
    color: "#F8F8F2",
    marginBottom: 8,
  },

  progressText: {
    fontSize: 16,
    color: "#BD93F9",
  },

  loadingSubtext: {
    fontSize: 14,
    color: "#6272A4",
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
    color: "#6272A4",
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
    backgroundColor: "#44475A",
  },

  assistantMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#383A59",
  },

  messageRole: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#FF79C6",
  },

  messageText: {
    fontSize: 16,
    lineHeight: 22,
    color: "#F8F8F2",
  },

  inputContainer: {
    padding: 16,
    backgroundColor: "#21222C",
    borderTopWidth: 1,
    borderTopColor: "#44475A",
    minHeight: 80,
  },

  textInput: {
    borderWidth: 1,
    borderColor: "#6272A4",
    borderRadius: 20,
    padding: 12,
    marginBottom: 12,
    backgroundColor: "#282A36",
    color: "#F8F8F2",
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
    color: "#FF5555",
    textAlign: "center",
    padding: 8,
    fontSize: 12,
  },
  sendButton: {
  backgroundColor: "#BD93F9", // roxo Dracula
  paddingVertical: 12,
  borderRadius: 20,
  alignItems: "center",
  justifyContent: "center",
},

sendButtonText: {
  color: "#282A36",
  fontSize: 16,
  fontWeight: "bold",
},

sendButtonDisabled: {
  backgroundColor: "#6272A4",
  opacity: 0.7,
},
})