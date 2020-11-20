class Conurbation < ApplicationRecord
	validates :name, uniqueness: true, presence: true

	has_many :confidants, foreign_key: :location_id

	has_many :confabs, through: :confidants
end
