class Todo < ActiveRecord::Base

  belongs_to :user
  validates :user, :title, :pom_estimate, :pom_total,  presence: true
  validates :completed, inclusion: {in: [true, false]}
  
end
