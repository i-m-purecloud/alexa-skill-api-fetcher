export const model = {
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
            "show me the status ",
            "Tell me the status",
            "what is the status"
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
          "name": "GetServicesDownInTag",
          "slots": [
            {
              "name": "tag",
              "type": "AMAZON.Actor"
            }
          ],
          "samples": [
            "what services are down in {tag}"
          ]
        },
        {
          "name": "GetTimeWhenServiceWentDown",
          "slots": [
            {
              "name": "service",
              "type": "AMAZON.Actor"
            }
          ],
          "samples": [
            "what time did {service} go down",
            "when was {service} down"
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