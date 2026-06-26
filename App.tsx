import { useState, useEffect, useCallback } from "react"
import {
  View,
  Text,
  Button,
  TextInput,
  ScrollView,
  ActivityIndicator,
  Alert,
  Platform,
  KeyboardAvoidingView,
} from "react-native"

import { useLLM, Message, LLAMA3_2_1B_SPINQUANT } from "react-native-executorch"

import { styles } from "./styles"

export default function App() {
  const [inputMessage, setInputMessage] = useState("")

  const llm = useLLM({ model: LLAMA3_2_1B_SPINQUANT })

  async function handleSendMessage() {
    if (!inputMessage.trim() || llm.isGenerating || !llm.isReady) return

    try {
      setInputMessage("")
      await llm.sendMessage(inputMessage.trim())
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error)
      Alert.alert("Não foi possível enviar a mensagem. Tente novamente.")
    }
  }

  const renderMessage = useCallback((message: Message, index: number) => {
    const isUser = message.role === "user"

    return (
      <View
        key={index}
        style={[
          styles.messageContainer,
          isUser ? styles.userMessage : styles.assistantMessage,
        ]}
      >
        <Text style={styles.messageRole}>{isUser ? "Você" : "Assistente"}</Text>
        <Text style={[styles.messageText]}>{message.content}</Text>
      </View>
    )
  }, [])

  useEffect(() => {
    if (!llm.isReady) return

    llm.configure({
      chatConfig: {
        systemPrompt: "Você é um tutor universitário especialista em Ciência da Computação. Você ensina disciplinas de um curso de graduação e ajuda na resolução de problemas técnicos, teóricos e práticos. Seu foco é: explicação didática de conceitos, apoio em exercícios acadêmicos, auxílio em programação e depuração de código, preparação para provas e trabalhos. Sempre explique como se estivesse ensinando em sala de aula, use exemplos práticos e analogias quando necessário, mostre código quando aplicável, estruture respostas de forma lógica e progressiva e seja preciso tecnicamente. Se a pergunta envolver programação, priorize clareza e boas práticas. Responda sempre em português do Brasil.",
        contextWindowLength: 4096,
      },
    })
  }, [llm.isReady])

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={styles.container}
    >
      {!llm.isReady ? (
        <View style={styles.loadingContainer}>
          <Text style={styles.progressText}>Carregando Modelo</Text>

          <Text style={styles.loadingSubtext}>
            Isso pode levar alguns minutos na primeira vez...
          </Text>

          {llm.error && (
            <Text style={styles.loadingSubtext}>
              Erro ao carregar modelo: {String(llm.error)}
            </Text>
          )}

          <ActivityIndicator size="small" style={styles.loader} />
        </View>
      ) : (
        <>
          <ScrollView
            style={styles.messagesContainer}
            contentContainerStyle={styles.messagesContent}
            keyboardShouldPersistTaps="handled"
          >
            {llm.messageHistory.length === 0 ? (
              <Text style={styles.emptyState}>
                Olá! Como posso ajudá-lo hoje?
              </Text>
            ) : (
              llm.messageHistory.map((message, index) =>
                renderMessage(message, index)
              )
            )}

            {llm.isGenerating && (
              <View style={[styles.messageContainer, styles.assistantMessage]}>
                <Text style={styles.messageRole}>Assistente</Text>
                <Text style={[styles.messageText, styles.messageText]}>
                  {llm.response || "Processando..."}
                </Text>
              </View>
            )}
          </ScrollView>

          <View style={styles.inputContainer}>
            <TextInput
              value={inputMessage}
              onChangeText={setInputMessage}
              placeholder="Digite sua mensagem..."
              style={styles.textInput}
              multiline
              editable={!llm.isGenerating}
              returnKeyType="send"
              onSubmitEditing={handleSendMessage}
            />

            <View style={styles.buttonContainer}>
              <View style={styles.buttonWrapper}>
                <Button
                  title={llm.isGenerating ? "Gerando..." : "Enviar"}
                  onPress={handleSendMessage}
                  disabled={
                    !inputMessage.trim() || llm.isGenerating || !llm.isReady
                  }
                />
              </View>
            </View>
          </View>
        </>
      )}
    </KeyboardAvoidingView>
  )
}
