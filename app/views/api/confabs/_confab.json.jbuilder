json.extract! confab,
              :id,
              :host_id,
              :description,
              :max_capacity,
              :start_time_in_ms,
              :end_time_in_ms,
              :attendee_ids
json.location_id confab.host.location_id
