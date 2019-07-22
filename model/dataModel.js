const model = {
  "interactionModel": {
    "languageModel": {
      "invocationName": "api watcher",
      "intents": [
        {
          "name": "AMAZON.FallbackIntent",
          "samples": []
        },
        {
          "name": "AMAZON.CancelIntent",
          "samples": []
        },
        {
          "name": "AMAZON.HelpIntent",
          "samples": []
        },
        {
          "name": "AMAZON.StopIntent",
          "samples": []
        },
        {
          "name": "AMAZON.NavigateHomeIntent",
          "samples": []
        },
        {
          "name": "GetStatus",
          "slots": [],
          "samples": [
            "Tell me the status of application",
            "what is the status of application"
          ]
        },
        {
          "name": "GetStatusOfTag",
          "slots": [
            {
              "name": "service",
              "type": "AMAZON.Actor"
            }
          ],
          "samples": [
            "tell me the status of {service}",
            "what is the status of {service}"
          ]
        },
        {
          "name": "GetServicesDown",
          "slots": [],
          "samples": [
            "Which services are down"
          ]
        },
        {
          "name": "LaunchRequest"
        }
      ],
      "types": []
    }
  }
};