<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Help & Support</title>
    <link rel="stylesheet" href="styles/help.css">
    <link rel="stylesheet" href="styles/header.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Alata&family=Outfit:wght@100..900&display=swap"
        rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="scripts/headfoot.js"></script>
    <style>
        .gotoCart-popup {
            display: none;
        }
    </style>
</head>

<body>
    <header id="header"></header>
    <div class="help-container">
        <div class="order-help-header">
            <h2>Help & Support</h2>
            <p>We're here to help you resolve any issues with your order quickly and efficiently !</p>
        </div>

        <div class="order-section">

        </div>

        <div class="help-grid">
            <div class="help-card" onclick="openModal('wrongItems')">
                <div class="help-icon">🍕</div>
                <h3>Wrong Items Received?</h3>
                <p>Got the wrong food items in your order? We'll help you get this sorted out immediately.</p>
                <button class="help-button">Report Issue</button>
            </div>

            <div class="help-card" onclick="openModal('spoiledFood')">
                <div class="help-icon">🤢</div>
                <h3>Spoiled Food Received?</h3>
                <p>Received food that doesn't meet our quality standards? Let us know and we'll make it right.</p>
                <button class="help-button">Report Issue</button>
            </div>

            <div class="help-card" onclick="openModal('deliveryAgent')">
                <div class="help-icon">🚴</div>
                <h3>Issue with Delivery Agent?</h3>
                <p>Had a problem with your delivery person? Share your experience so we can improve our service.</p>
                <button class="help-button">Report Issue</button>
            </div>

            <div class="help-card" onclick="openModal('orderNotReceived')">
                <div class="help-icon">📦</div>
                <h3>Order Not Received Yet?</h3>
                <p>Your order is taking longer than expected? Let us track it down and provide you with updates.</p>
                <button class="help-button">Track Order</button>
            </div>

            <div class="help-card" onclick="openModal('missingItems')">
                <div class="help-icon">📝</div>
                <h3>Some Items are Missing?</h3>
                <p>Didn't receive all the items you ordered? We'll investigate and resolve this for you right away.</p>
                <button class="help-button">Report Missing Items</button>
            </div>
        </div>

        <div class="contact-section">
            <h3>Still Need Help?</h3>
            <p>Our customer support team is available 24/7 to assist you</p>
            <div class="contact-options">
                <a href="tel:+91 9014709040" class="contact-btn">
                    📞 Call Support
                </a>
                <a href="mailto:starterwave25@gmail.com" class="contact-btn">
                    📧 Email Us
                </a>
            </div>
        </div>
    </div>

    <!-- Modal Templates -->
    <div id="wrongItems" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <h3>Report Wrong Items</h3>
            <form>
                <div class="form-group">
                    <label for="itemsOrdered">Items You Ordered:</label>
                    <textarea id="itemsOrdered" name="itemsOrdered" rows="3" placeholder="List the items you ordered..."></textarea>
                </div>
                <div class="form-group">
                    <label for="itemsReceived">Items You Received:</label>
                    <textarea id="itemsReceived" name="itemsReceived" rows="3" placeholder="List the items you actually received..."></textarea>
                </div>
                <div class="form-group">
                    <label for="additionalDetails">Additional Details:</label>
                    <textarea id="additionalDetails" name="additionalDetails" rows="3" placeholder="Any other details about the issue..."></textarea>
                </div>
                <button type="submit" class="submit-btn">Submit Report</button>
            </form>
        </div>
    </div>

    <div id="spoiledFood" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <h3>Report Spoiled Food</h3>
            <form>
                <div class="form-group">
                    <label for="spoiledItems">Which Items Were Spoiled:</label>
                    <textarea id="spoiledItems" name="spoiledItems" rows="3" placeholder="Describe the spoiled items..."></textarea>
                </div>
                <div class="form-group">
                    <label for="issueDescription">Issue Description:</label>
                    <textarea id="issueDescription" name="issueDescription" rows="3" placeholder="Describe the condition of the food..."></textarea>
                </div>
                <div class="form-group">
                    <label for="refundPreference">Preferred Resolution:</label>
                    <select id="refundPreference" name="refundPreference" style="width: 100%; padding: 12px; border: 2px solid var(--peach); border-radius: 10px;">
                        <option>Refund of spoiled item</option>
                        <option>Replacement Order</option>
                    </select>
                </div>
                <button type="submit" class="submit-btn">Submit Report</button>
            </form>
        </div>
    </div>

    <div id="deliveryAgent" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <h3>Delivery Agent Issue</h3>
            <form>
                <div class="form-group">
                    <label for="agentIssue">Type of Issue:</label>
                    <select id="agentIssue" name="agentIssue" style="width: 100%; padding: 12px; border: 2px solid var(--peach); border-radius: 10px;">
                        <option>Unprofessional Behavior</option>
                        <option>Late Delivery</option>
                        <option>Damaged Package</option>
                        <option>Safety Concerns</option>
                        <option>Other</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="incidentDetails">Incident Details:</label>
                    <textarea id="incidentDetails" name="incidentDetails" rows="4" placeholder="Please describe what happened..."></textarea>
                </div>
                <div class="form-group">
                    <label for="deliveryTime">Delivery Time:</label>
                    <input type="time" id="deliveryTime" name="deliveryTime">
                </div>
                <button type="submit" class="submit-btn">Submit Report</button>
            </form>
        </div>
    </div>

    <div id="orderNotReceived" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <h3>Order Not Received</h3>
            <form>
                <div class="form-group">
                    <label for="currentTime">Current Time:</label>
                    <input type="time" id="currentTime" name="currentTime">
                </div>
                <div class="form-group">
                    <label for="deliveryAddress">Delivery Address:</label>
                    <textarea id="deliveryAddress" name="deliveryAddress" rows="2" placeholder="Confirm your delivery address..."></textarea>
                </div>
                <div class="form-group">
                    <label for="contactAttempts">Did the delivery agent try to contact you?</label>
                    <select id="contactAttempts" name="contactAttempts" style="width: 100%; padding: 12px; border: 2px solid var(--peach); border-radius: 10px;">
                        <option>No contact attempts</option>
                        <option>Called but I missed it</option>
                        <option>Called and I answered</option>
                        <option>Texted me</option>
                    </select>
                </div>
                <button type="submit" class="submit-btn">Track My Order</button>
            </form>
        </div>
    </div>

    <div id="missingItems" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <h3>Report Missing Items</h3>
            <form>
                <div class="form-group">
                    <label for="fullOrder">Complete Order List:</label>
                    <textarea id="fullOrder" name="fullOrder" rows="3" placeholder="List all items that should have been in your order..."></textarea>
                </div>
                <div class="form-group">
                    <label for="missingItemsList">Missing Items:</label>
                    <textarea id="missingItemsList" name="missingItemsList" rows="3" placeholder="Which items are missing from your order?"></textarea>
                </div>
                <div class="form-group">
                    <label for="packageCondition">Package Condition:</label>
                    <select id="packageCondition" name="packageCondition" style="width: 100%; padding: 12px; border: 2px solid var(--peach); border-radius: 10px;">
                        <option>Package looked undamaged</option>
                        <option>Package was damaged</option>
                        <option>Package was opened</option>
                        <option>Not sure</option>
                    </select>
                </div>
                <button type="submit" class="submit-btn">Report Missing Items</button>
            </form>
        </div>
    </div>
    <script>
        const orderId = '<?php echo $_GET['order-id'] ?>';
    </script>
    <script src="scripts/help-order.js"></script>
</body>

</html>