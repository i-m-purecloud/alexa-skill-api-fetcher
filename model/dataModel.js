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
            "get the status of {service}",
            "tell me the status of {service}",
            "what is the status of {service}"
          ]
        },
        {
          "name": "GetServicesDown",
          "slots": [],
          "samples": [
            "what is down in my services",
            "what services are down",
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
            "tell me what is down in the {tag} service",
            "tell me the services in {tag} that are down",
            "what is down in {tag}",
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
            "tell me when the {service} service went down",
            "when did {service} go down",
            "what time did {service} go down",
            "when was {service} down"
          ]
        },
        {
          "name": "GetAllServicesName",
          "slots": [],
          "samples": [
            "what are the services available in api watcher",
            "tell me all the services in api watcher"
          ]
        },
        {
          "name": "GetApiNameForTag",
          "slots": [
            {
              "name": "tag",
              "type": "AMAZON.Actor"
            }
          ],
          "samples": [
            "tell me the api's in {tag} ",
            "what are the api's in {tag}"
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