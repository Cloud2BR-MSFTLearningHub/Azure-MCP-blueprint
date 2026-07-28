# Pre-Built AI Agent Samples

> Reference AI agent samples that use this repo's MCP Server over HTTP.

<details markdown="1">
<summary><strong>List of References</strong></summary>

- [Blueprint Overview](https://cloud2br-msftlearninghub.github.io/Azure-MCP-blueprint/)
- [Deployment & Configuration](https://cloud2br-msftlearninghub.github.io/Azure-MCP-blueprint/deployment-and-configuration/)
- Integration guides:
  - [Azure AI Foundry](https://cloud2br-msftlearninghub.github.io/Azure-MCP-blueprint/integration-guides/azure-ai-foundry-integration/)
  - [Microsoft Copilot Studio](https://cloud2br-msftlearninghub.github.io/Azure-MCP-blueprint/integration-guides/copilot-studio-integration/)
  - [Custom App](https://cloud2br-msftlearninghub.github.io/Azure-MCP-blueprint/integration-guides/custom-app-integration/)
- [MCP HTTP Client (Sample)](https://github.com/Cloud2BR-MSFTLearningHub/Azure-MCP-blueprint/tree/main/samples/mcp-http-client)

</details>

<details markdown="1">
<summary><strong>Table of Content</strong></summary>

| Sample | Industry | Agents | Complexity |
|--------|----------|---------|------------|
| [Healthcare Multi-Agent](https://github.com/Cloud2BR-MSFTLearningHub/Azure-MCP-blueprint/tree/main/agent-samples/healthcare-multi-agent) | Healthcare | 5 | Advanced |
| [Simple Query Agent](https://github.com/Cloud2BR-MSFTLearningHub/Azure-MCP-blueprint/tree/main/agent-samples/simple-query-agent) | Any | 1 | Beginner |
| [Retail Shopping Assistant](https://github.com/Cloud2BR-MSFTLearningHub/Azure-MCP-blueprint/tree/main/agent-samples/retail-shopping-assistant) | Retail | 6 | Intermediate |
| [Financial Advisor](https://github.com/Cloud2BR-MSFTLearningHub/Azure-MCP-blueprint/tree/main/agent-samples/financial-advisor) | Finance | 4 | Intermediate |
| [Manufacturing Monitor](https://github.com/Cloud2BR-MSFTLearningHub/Azure-MCP-blueprint/tree/main/agent-samples/manufacturing-monitor) | Manufacturing | 3 | Intermediate |
| [Education Student Assistant](https://github.com/Cloud2BR-MSFTLearningHub/Azure-MCP-blueprint/tree/main/agent-samples/education-student-assistant) | Education | 3 | Intermediate |
| [Logistics Tracker](https://github.com/Cloud2BR-MSFTLearningHub/Azure-MCP-blueprint/tree/main/agent-samples/logistics-tracker) | Logistics | 3 | Intermediate |
| [Insurance Claims Agent](https://github.com/Cloud2BR-MSFTLearningHub/Azure-MCP-blueprint/tree/main/agent-samples/insurance-claims-agent) | Insurance | 4 | Intermediate |
| [Hospitality Concierge](https://github.com/Cloud2BR-MSFTLearningHub/Azure-MCP-blueprint/tree/main/agent-samples/hospitality-concierge) | Hospitality | 3 | Intermediate |
| [Energy Usage Advisor](https://github.com/Cloud2BR-MSFTLearningHub/Azure-MCP-blueprint/tree/main/agent-samples/energy-usage-advisor) | Energy | 3 | Intermediate |
| [Real Estate Portfolio Manager](https://github.com/Cloud2BR-MSFTLearningHub/Azure-MCP-blueprint/tree/main/agent-samples/realestate-portfolio-manager) | Real Estate | 3 | Intermediate |

- `healthcare-multi-agent`: an advanced orchestrated multi-agent sample.
- The other industry samples: lightweight CLIs that (a) route to a role and (b) run a search tool via MCP, optionally using `openai_chat_completion` for routing and summaries when available.

</details>

## Key Features

- **MCP HTTP integration**: Calls `/health`, `/mcp/tools`, and `/mcp/execute`
- **Optional LLM routing**: Uses `openai_chat_completion` when the server exposes it
- **Search-first flow**: Uses `search_semantic` (preferred) or `search_documents`
- **Minimal dependencies**: `requests` + `python-dotenv`

> Patterns: <br/>
>
> - Lightweight HTTP samples (most folders):
>
  ```
  User
      ↓
  (optional) openai_chat_completion  → role routing
      ↓
  search_semantic / search_documents → retrieve relevant items
      ↓
  (optional) openai_chat_completion  → concise summary
  ```

> - Advanced orchestration (healthcare-multi-agent): For example, the healthcare sample demonstrates a richer orchestrator and multi-agent handoffs.

</details>

## Customization Guide

1. **Add New Industry**: Copy sample, modify agent definitions
2. **Adjust Model Routing**: Edit `model_router.py` complexity rules
3. **Add Agents**: Extend agent registry with new specialists
4. **Change MCP Tools**: Update agent tool permissions

## Next Steps

- Explore individual sample READMEs
- [Custom App Integration](https://cloud2br-msftlearninghub.github.io/Azure-MCP-blueprint/integration-guides/custom-app-integration/)
- [Azure AI Foundry Integration](https://cloud2br-msftlearninghub.github.io/Azure-MCP-blueprint/integration-guides/azure-ai-foundry-integration/)
- [Copilot Studio Integration](https://cloud2br-msftlearninghub.github.io/Azure-MCP-blueprint/integration-guides/copilot-studio-integration/)
