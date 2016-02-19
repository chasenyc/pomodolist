class Todo < ActiveRecord::Base

  belongs_to :user
  validates :user, :title, :pom_estimate, :pom_total,
            :completed, presence: true
  
end
