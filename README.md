# ✍️ Módulo de Assinatura Digital - Aplicativo Mobile

 Esta funcionalidade tem como objetivo permitir a coleta de assinaturas digitais diretamente em relatórios, utilizando dispositivos móveis, garantindo maior formalidade, segurança e rastreabilidade aos documentos.

---

## 🏗️ Arquitetura do Software (MVC)

O código foi estruturado seguindo o padrão arquitetural **Model-View-Controller (MVC)**, assegurando a separação clara de responsabilidades, alta testabilidade, manutenibilidade e escalabilidade da aplicação.

```text
src/
│
├── controllers/
│   └── SignatureController.js   # Gerencia estados, eventos de ação e regras de negócio
│
├── views/
│   └── SignatureView.js         # Interface do usuário (UI) com o canvas interativo
│
└── models/
    └── SignatureModel.js        # Tratamento de dados, formatação e envio (Base64)
